<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Task4</title>
    <link rel="stylesheet" href="resources/css/stylesheet.css" type="text/css"/>
    <link rel="stylesheet" href="resources/bootstrap-3.3.6/css/bootstrap.css" type="text/css"/>
  </head>
  <body>
  <br><br>
  <div class="container">
    <ul class="nav nav-tabs">
      <li class="active"><h4 class="str">Translator</h4></li>
    </ul><br>
    <form name="translate-form">
      <div class="row">
        <div class="col-md-4 brd">
          <input type="text" class="form-control" id="inputline" placeholder="Starting line"><br>
          <button type="button" class="btn btn-default" onclick="convert()">Convert</button><br><br>
          <input type="text" class="form-control" id="result1" placeholder="Translit line"><br>
          <input type="text" class="form-control" id="result2" placeholder="Reverse line"><br>
        </div>
      </div>
    </form>
  </div>
  <script type="text/javascript" src="resources/js/functions.js"></script>
  </body>
</html>
