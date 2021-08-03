        <p class="m-0 text-center text-white small">Copyright &copy; Daně jednoduše 2019</p>
      <!-- /.container -->
    </footer>

    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="js/createPDF.js"></script>
    <script>
    $.datepicker.regional['cs'] = {
          closeText: 'Cerrar',
          prevText: 'Předchozí',
          nextText: 'Další',
          currentText: 'Hoy',
          monthNames: ['Leden','Únor','Březen','Duben','Květen','Červen', 'Červenec','Srpen','Září','Říjen','Listopad','Prosinec'],
          monthNamesShort: ['Le','Ún','Bř','Du','Kv','Čn', 'Čc','Sr','Zá','Ří','Li','Pr'],
          dayNames: ['Neděle','Pondělí','Úterý','Středa','Čtvrtek','Pátek','Sobota'],
          dayNamesShort: ['Ne','Po','Út','St','Čt','Pá','So',],
          dayNamesMin: ['Ne','Po','Út','St','Čt','Pá','So'],
          weekHeader: 'Sm',
          dateFormat: 'dd.mm.yy',
          firstDay: 1,
          isRTL: false,
          showMonthAfterYear: false,
          yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['cs']);
    $(".datepicker").datepicker({dateFormat: "d.m.yy"});
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script src="vendor/jquery/jquery.min.js"></script>
      	<script src="https://d3js.org/d3.v3.js"></script>
        <script type="text/javascript" src="js/saveLoad.js"></script>
      	<script type="text/javascript" src="js/main.js"></script>
      	<script type="text/javascript" src="js/toggle.js"></script>
      	<script type="text/javascript" src="js/xmlExport.js"></script>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
        <script src="bootstrap/js/bootstrap.min.js"></script>
        <script src="jquery.bootstrap.wizard.js"></script>
        <script src="prettify.js"></script>
        <script>
          $(document).ready(function() {
            $('#rootwizard').bootstrapWizard();
          window.prettyPrint && prettyPrint()
          });
        </script>
  </body>

</html>
