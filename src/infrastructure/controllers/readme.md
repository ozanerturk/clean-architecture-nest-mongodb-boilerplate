controllers most of the time related with MVC pattern

In clean architecture, controllers are open doors to the outside, which enables external systems to be enganged with internal business functionalities

examples
    webserver, (for nodejs. express request handlers)
    message handlers


Onething that I did not do according to clean architecture is that I didnt use input output boundries for each layer.
For example I place requset response models right next to controller which are directly depended on the entities 
its like

DTO -> entity

but it should be like 
DTO <boundary> entity

boundaries have both sides dependencies to isolate each layers, anyways :D 