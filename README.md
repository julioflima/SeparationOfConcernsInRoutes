<p align="center">
  <a href="https://en.wikipedia.org">
    <img src="https://user-images.githubusercontent.com/17098382/92084131-52061480-ed9d-11ea-9acd-ec209bbed243.png" align="center" weight="400px"  margin="200px"/>
    </a>
    <span align="center" weight="400px"  margin="200px">
      ____________
    </span>
  <a href="https://http://www.ufc.br/">
    <img src="https://user-images.githubusercontent.com/17098382/92084392-b45f1500-ed9d-11ea-8ec9-09c7f1283b2c.png" align="center" height="170px" padding="400"/>
  </a>
</p>

<h1 align="center">Mobile ECG</h1>
<p align="left">
  A <strong>Mobile ECG</strong> visa o desenvolvimento de uma plataforma aberta móvel de aquisição, análise automática e compartilhamento de sinais e dados cardiológicos para fins de pesquisa em ambiente colaborativo.
</p>

<p align="left">
  <h2 align="left">
    <a href="https://mobileecgufc.web.app/">
      Demonstração
    </a>
    
  </h2>	
  <p align="left">
   Você poderá selecionar o sensor e ver sua atualização em tempo real, clicando nesse <a href="https://mobileecgufc.web.app/">link</a>.
   </p>
</p>

<p align="left">
  <h2 align="left">
    <a href="https://github.com/juloko/MobileECG/blob/master/project.pdf">
      Projeto
    </a>
  </h2>	
  <p align="left">
      Confira a proposta na íntegra, clicando nesse <a href="https://github.com/juloko/MobileECG/blob/master/project.pdf">link</a>.
   </p>
</p>
 
<p align="left">
  <h2 align="left">
    <a href="https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh">
      Visulização do Bancode Dados
    </a>
  </h2>	
  <p align="left">
    <ol>
    <li>
      Para uma melhor visualização do banco de dados de cada sensor, você pode utilizar o próprio navegador, para isso tenha instalado em sua máquina o Chrome  baixe a extensão no senguinte <a href="https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh">link</a>.
    </li>
    <li>
      Em seguida copie a URL de GET no tópico API abaixo, modifique "electromyografy" para o nome do sensor desejado.
    </li>
    </ol>
</p>
   
<p align="left">
   <h2 align="left">Api</h2>	
   <h5 align="left">Pega todos os timestamps cadastrados neste sensor, caso queira se remover algum dado.</h5>
   
  `` GET http://mobileecgufc.web.app/sensorTimestamps?name=electromyografy ``	
  > ``` http	
  > HTTP/1.1 200 OK	
  > Content-Type: application/json 	
  > [	
  >   "1231231434",
  >   "1231231435",
  >   "1231231436",
  >   "1231231437"
  > ]	
  > ```	

  <h5 align="left">Pega todos os dados cadastrados neste sensor.</h5>
  
  `` GET https://mobileecgufc.web.app/sensor?name=electromyografy ``	
  > ``` http	
  > HTTP/1.1 200 OK	
  > Content-Type: application/json 	
  > [	
  >   {	
  >     "value": 1,	
  >     "date": "1970/01/15 06:00:31.434000000",	
  >     "timestamp": 1231231434	
  >   },	
  >   {	
  >   "value": 2,	
  >   "timestamp": 1231231435,	
  >   "date": "1970/01/15 06:00:31.435000000"	
  >   },	
  > ]	
  > ```	
    
  <h5 align="left">Cadastra um novo dado na tabela deste sensor.</h5>
  
  `` POST https://mobileecgufc.web.app/sensor?name=electromyografy ``	
  > ``` http	
  > Content-Type: application/json 	
  > {	
  >   "value":1,	
  >   "date":"17-09-2020 01:32:01:30",	
  >   "timestamp":1231231434	
  > }	
  > ```	
    
  <h5 align="left">Deleta um dado deste sensor, de acordo com o timestamp.</h5>
  
  `` DELETE https://mobileecgufc.web.app/sensor?name=electromyografy ``	
  > ``` http	
  > Content-Type: application/json 	
  > {	
  >   "timestamp":1231231434	
  > }	
  > ```	
  > ``` http	
  > HTTP/1.1 200 OK
  > Content-Type: application/json 	
  > Timestamp "1231231434", of sensor "electromyografy"  deleted!
  > ```	
</p>
