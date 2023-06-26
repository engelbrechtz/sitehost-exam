import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [domains, setDomains] = useState([]);
  useEffect(() => {
    // API configuration
    const apiServer = "https://api.demo.sitehost.co.nz";
    const apiVersion = "1.0";
    const apiKey = "d17261d51ff7046b760bd95b4ce781ac";
    const clientId = "293785";
    const format = "json";

    // API call URL
    const apiURL = `${apiServer}/${apiVersion}/srs/list_domains.${format}?client_id=${clientId}&apikey=${apiKey}`;

    // Fetch the list of domains from the API
    const fetchDomains = async () => {
      try {
        const response = await axios.get(apiURL);
        const domains = response.data;
        setDomains(domains);
      } catch (error) {
        console.error("Error fetching domains:", error);
      }
    };

    fetchDomains();
  }, []);
  // useEffect(() => {
  //   const fetchDomains = async () => {
  //     try {
  //       const apiEndpoint = "https://api.example.com/customer_domains";
  //       const sshUsername = "dm20230626";
  //       const sshPassword = "FxFBnzK9";
  //       const sshHostname = "dm20230626.120.138.30.206.sth.nz";

  //       const sshCommand = `curl -s "https://api.demo.sitehost.co.nz/1.0/srs/list_domains.json?client_id=293785&apikey=d17261d51ff7046b760bd95b4ce781ac"`;

  //       const response = await axios.post(
  //         "https://dm20230626@dm20230626.120.138.30.206.sth.nz",
  //         {
  //           username: sshUsername,
  //           password: sshPassword,
  //           hostname: sshHostname,
  //           command: sshCommand,
  //         }
  //       );

  //       const domains = response.data.domains;

  //       setDomains(domains);
  //     } catch (err) {
  //       console.error("error" + err);
  //     }
  //   };
  //   fetchDomains();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>customer details.</h1>
        {domains.map((domain, index) => (
          <li key={index}>{domain}</li>
        ))}
      </header>
    </div>
  );
}

export default App;
