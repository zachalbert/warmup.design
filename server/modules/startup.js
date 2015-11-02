let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();
  _generatePrompts();
};

var _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

var _setBrowserPolicies = () => Modules.server.setBrowserPolicies();

var _generateAccounts = () => Modules.server.generateAccounts();

var _generatePrompts = () => Modules.server.generatePrompts();

Modules.server.startup = startup;
