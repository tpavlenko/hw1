// 1.	Написать программу расчета "второго закона Ньютона"

const appliedForce = +prompt('Введите значение силы, приложенной к телу (F):');
const bodyMass = +prompt('Введите значение массы тела (m):');
const bodyAcceleration = appliedForce / bodyMass;

const result = '**************<br /><br />Ускорение тела при силе F = ' + appliedForce + ' и массе m = ' + bodyMass + ':<br /><br />--------------------<br /><br />a = ' + bodyAcceleration + '.<br /><br />-------------------<br /><br />end.';

document.write(result);


/*const appliedForce = +prompt('Введите значение силы, приложенной к телу (F):');
const bodyMass = +prompt('Введите значение массы тела (m):');
const bodyAcceleration = appliedForce / bodyMass;

const result = `**************<br />
<br />
Ускорение тела при силе F = ${appliedForce} и массе m = ${bodyMass} :<br />
<br />
--------------------<br />
<br />
a = ${bodyAcceleration}.<br />
<br />
-------------------<br />
<br />
end.`;

document.write(result);*/