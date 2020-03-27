# webmethods.io_insightly-Community-Connector

This is a Webmethods.io community connector for [Insightly](https://en.wikipedia.org/wiki/Insightly).The company develops cloud-based customer relationship management (CRM) and project management tools for small and medium size businesses. The connector uses the [Insightly REST API](https://api.insightly.com/) to make HTTP requests to access or modify a resource. The actions supported by this community connector are:

#### 1. [Gets a list of Contacts](https://api.insightly.com/v3.1/Help#!/Contacts/GetEntities)
#### 2. [Gets a Contact](https://api.insightly.com/v3.1/Help#!/Contacts/GetEntity)
#### 3. [Deletes a Contact](https://api.insightly.com/v3.1/Help#!/Contacts/DeleteEntity)
#### 4. [Adds a Contact](https://api.insightly.com/v3.1/Help#!/Contacts/AddEntity)
#### 5. [Gets a List of Projects](https://api.insightly.com/v3.1/Help#!/Projects/GetEntities)
#### 6. [Gets a list of Users](https://api.insightly.com/v3.1/Help#!/Users/GetUsers)
#### 7. [Adds a Project](https://api.insightly.com/v3.1/Help#!/Projects/AddEntity)


Learn about other supported actions [here](https://api.insightly.com/).

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
This connector requires any [Node](https://nodejs.org/dist/) version between 8.14.0 and 10.14.0

Note: If you have installed any other Node version on your system, you can:
1. Use tools to switch between different versions of Node

  - For Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades).
  
  - For Mac, use [homebrew](https://brew.sh/).
2. Build your app using your existing Node version and then transpile your code using a transpiler like [Babel](https://babeljs.io/).

The connector has been built with [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI tool, which must be installed. 

### Getting the API key 
![API Key](https://github.com/SoftwareAG/webmethods.io_insightly-Community-Connector/blob/master/a.png)

### Installing
1. Clone the repo `git@github.com:SoftwareAG/webmethods.io_insightly-Community-Connector.git`.
2. Run `npm install -g @webmethodsio/wmiocli`.
3. Login to your webmethods.io tenant using `wmio login`.
4. Execute `wmio init` to get started.
5. Finally, execute `wmio deploy` to deploy this connector to your tenant.

Once deployed, it’ll be automatically registered with webMethods.io Integration and will be available to you locally in the Connectors panel under the Services tab.

## Running the tests
To test, you can execute `wmio test`.

## Deployment
Execute `wmio deploy` to deploy this connector to your webmethods.io tenant. And `wmio unpublish` to unpublish the published connector app along with triggers and actions associated with the app.

![Insightly Connector](https://github.com/SoftwareAG/webmethods.io_insightly-Community-Connector/blob/master/insightly.png)

## Built With
Node v8.14.0 and [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI.

## Contributors
[Anshuman Saikia](https://github.com/anshu96788) |
[Dipankar Dutta](https://github.com/DipankarDDUT) |
[Nawajish Laskar](https://github.com/Nawajish)

## License
This project is licensed under the Apache 2.0 License - see the [LICENSE.md](https://github.com/SoftwareAG/webmethods-microservicesruntime-samples/blob/master/LICENSE) file for details

______________________
These tools are provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.

Contact us at [TECHcommunity](mailto:technologycommunity@softwareag.com?subject=Github/SoftwareAG) if you have any questions.
