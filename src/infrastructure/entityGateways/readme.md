you will see that I split entitygateways for each usecase,
I do not want to implement like a general repository patterns for all usecases
With this way, implementing a unit test is stupitly easy because no need for speific mocking for a particular function etc. 
just implemt the interface
you will see that in the tests.  


Entity gateways are components that they access external systems and gather data for usecases which are in need of business  
ex:
  web/api calls
  database access(kind a api call right ?)
  