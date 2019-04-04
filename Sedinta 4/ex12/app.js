var globalVariable = 'Ma aflu in contextul global';

function contextTest() {
  var localVariabile = 'Ma aflu in contextul local';
  var noVariable = 'Nu ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariabile);
  console.log(noVariable);
}

contextTest();
