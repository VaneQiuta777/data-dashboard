window.addEventListener('load', function(event) {
  var displayFilter = document.getElementById('menuPrincipal');
  var displayFilterTwo = document.getElementById('fa-sort-desc2');
  var displayFilterThree = document.getElementById('fa-sort-desc3');
  var checkedSite = document.getElementById('checkbox-site');

  displayFilter.addEventListener('click', function(event) {
    var checkBoxSite = document.getElementById('checkbox-site');
    var classCheckBoxSite = document.getElementsByClassName('checkbox-site')[0];
    if (classCheckBoxSite.style.display = 'none') {
      classCheckBoxSite.style.display = 'block';
      classCheckBoxSite.style.left = '100px';
      classCheckBoxSite.style.up = '80px';
    } else classCheckBoxSite.style.display = 'none';
  });

  displayFilterTwo.addEventListener('click', function(event) {
    var checkBoxCommonCore = document.getElementById('checkbox-commoncore');
    var classCheckBoxCommonCore = document.getElementsByClassName('checkbox-commoncore')[0];
    if (classCheckBoxCommonCore.style.display = 'none') {
      classCheckBoxCommonCore.style.display = 'block';
      classCheckBoxCommonCore.style.left = '180px';
      classCheckBoxCommonCore.style.up = '30px';
    } else classCheckBoxCommonCore.style.display = 'none';
  });

  displayFilterThree.addEventListener('click', function(event) {
    var checkBoxHse = document.getElementById('checkbox-HSE');
    var classCheckBoxHse = document.getElementsByClassName('checkbox-HSE')[0];
    if (classCheckBoxHse.style.display = 'none') {
      classCheckBoxHse.style.display = 'block';
      classCheckBoxHse.style.left = '80px';
      classCheckBoxHse.style.up = '30px';
    } else classCheckBoxHse.style.display = 'none';
  });

  // solucionando primer ennunciado
  // declarando variables generales
  var siteLim = data['LIM'];
  var siteAqp = data['AQP'];
  var siteChile = data['SCL'];
  var siteCdmx = data['CDMX'];

  // CASO LIMA
  // obteniendo numero de poblacion estudiantil

  var limaProm2016ii = siteLim['2016-2'];
  var limaProm2017i = siteLim['2017-1'];
  var limaProm2017ii = siteLim['2017-2'];

  console.log(limaProm2016ii.students.length); // 35
  console.log(limaProm2017i.students.length); // 17
  console.log(limaProm2017ii.students.length); // 14

  var limaStudents2016ii = limaProm2016ii.students;
  var activeLimaStudents2016ii = 0;
  var inactiveLimaStudents2016ii = 0;
  var limaStudents2017i = limaProm2017i.students;
  var activeLimaStudents2017i = 0;
  var inactiveLimaStudents2017i = 0;
  var limaStudents2017ii = limaProm2017ii.students;
  var activeLimaStudents2017ii = 0;
  var inactiveLimaStudents2017ii = 0;

  // obteniendo procentaje de estudiantes de deserción de estudiantes por sede y generacion

  // Caso Lima2016-2

  for (var i = 0; i < limaStudents2016ii.length;i++) {
    if (limaStudents2016ii[i]['active'] === true) {
      activeLimaStudents2016ii ++;
    } else {
      inactiveLimaStudents2016ii ++;
    }
  }
  var enrolledLimaStudents2016ii = activeLimaStudents2016ii + inactiveLimaStudents2016ii;
  console.log(enrolledLimaStudents2016ii);
  var desertionLimaStudents2016ii = Math.floor((inactiveLimaStudents2016ii * 100) / (enrolledLimaStudents2016ii)) + '%';
  var pastScoreLimaStudents2016ii = 0;

  for (var i = 0; i < limaStudents2016ii.length;i++) {
    // ingresando a los sprints para obtener las notas tech y hse
    for (var j = 0; j < limaStudents2016ii[i]['sprints'].length; j++) {
      var sprintScoreLimaStudents2016ii = (limaStudents2016ii[i]['sprints'][j]['score']['tech'] + limaStudents2016ii[i]['sprints'][j]['score']['hse']);
      if (sprintScoreLimaStudents2016ii >= 2100) {
        pastScoreLimaStudents2016ii ++;
      }
    }
  }
  var percentPastScoreLimaStudents2016ii = Math.floor((pastScoreLimaStudents2016ii * 100) / (enrolledLimaStudents2016ii)) + '%';


  // caso Lima2017-1

  for (var i = 0; i < limaStudents2017i.length;i++) {
    if (limaStudents2017i[i]['active'] === true) {
      activeLimaStudents2017i ++;
    } else {
      inactiveLimaStudents2017i ++;
    }
  }
  var enrolledLimaStudents2017i = activeLimaStudents2017i + inactiveLimaStudents2017i;
  console.log(enrolledLimaStudents2017i);
  var desertionLimaStudents2017i = Math.floor((inactiveLimaStudents2017i * 100) / (enrolledLimaStudents2017i)) + '%';

  var pastScoreLimaStudents2017i = 0;

  for (var i = 0; i < limaStudents2017i.length;i++) {
    // ingresando a los sprints para obtener las notas tech y hse
    for (var j = 0; j < limaStudents2017i[i]['sprints'].length; j++) {
      var sprintScoreLimaStudents2017i = (limaStudents2017i[i]['sprints'][j]['score']['tech'] + limaStudents2017i[i]['sprints'][j]['score']['hse']);
      if (sprintScoreLimaStudents2017i >= 2100) {
        pastScoreLimaStudents2017i ++;
      }
    }
  }
  var percentPastScoreLimaStudents2017i = Math.floor((pastScoreLimaStudents2017i * 100) / (enrolledLimaStudents2017i)) + '%';

  checkedSite.addEventListener('change', function(event) {
    console.log(event.target);
    if (checkedSite === 'lim2016 - ii') {
      getElementById('numDataNumber').innerHtml = enrolledLimaStudents2016ii;
      getElementById('numDataDropout').innerHtml = desertionLimaStudents2016ii;
      getElementById('numDataAchievement').innerHtml = pastScoreLimaStudents2016ii;
      getElementById('numDataAchievementPercent').innerHtml = percentPastScoreLimaStudents2016ii;
    } else if (checkedSite === 'lima2017-i') {
      getElementById('numDataNumber').innerHtml = enrolledLimaStudents2017i;
      getElementById('numDataDropout').innerHtml = desertionLimaStudents2017i;
      getElementById('numDataAchievement').innerHtml = pastScoreLimaStudents2017i;
      getElementById('numDataAchievementPercent').innerHtml = percentPastScoreLimaStudents2017i;
    }
  });
});

/* event tab*/
var mostrarOcultar = function(e) {
  var tabSeleccionado = e.target.dataset.tabSeleccionado;
  var overview = document.getElementById('overview');
  var students = document.getElementById('students');
  var teachers = document.getElementById('teachers');
  if (tabSeleccionado === 'tabOverview') {
    console.log('mostrar overview');
    /* hide students y teachers*/
    students.style.display = 'none';
    teachers.style.display = 'none';
    /* show overview*/
    overview.style.display = 'block';
  } else if (tabSeleccionado === 'tabStudents') {
    console.log('mostrar students');
    /* hide overview y teachers*/
    overview.style.display = 'none';
    teachers.style.display = 'none';
    /* show overview*/
    students.style.display = 'block';
  } else if (tabSeleccionado === 'tabTeachers') {
    console.log('mostrar teachers');
    /* hide overview y students*/
    overview.style.display = 'none';
    students.style.display = 'none';
    /* show teachers*/
    teachers.style.display = 'block';
  }
};
var cargarPagina = function() {
  students.style.display = 'none';
  teachers.style.display = 'none';
  var elementosTab = document.getElementsByClassName('tab');
  for (var i = 0; i < elementosTab.length; i++) {
    elementosTab[i].addEventListener('click', mostrarOcultar);
  }
};
cargarPagina();


// console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['score']['tech']);
// console.log(data);
// var shortCut = data['LIM']['2016-2']['students'];
// console.log(shortCut.length);
// console.log(shortCut);