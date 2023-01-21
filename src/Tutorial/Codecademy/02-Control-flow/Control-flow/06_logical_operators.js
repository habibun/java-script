/**
 * Created by habibun on 12/17/16.
 */
var moonPhase = 'full';
var foggyNight = false;
if (moonPhase === 'full' || foggyNight) {
    console.log('Howwwlll!!');
} else if (moonPhase === 'mostly full') {
    console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
    console.log('Back on two feet');
} else {
    console.log('Invalid moon phase');
}