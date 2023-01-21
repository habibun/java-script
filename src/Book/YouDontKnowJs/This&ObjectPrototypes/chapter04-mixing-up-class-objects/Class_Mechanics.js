/**
 * Created by jony on 1/8/17.
 */

/**
 * Constructor
 */
class CoolGuy {
    specialTrick = nothing;

    CoolGuy(trick) {
        specialTrick = trick
    }

    showOff() {
        output("Here's my trick: ", specialTrick)
    }
}

Joe = new CoolGuy( "jumping rope" );
Joe.showOff(); // Here's my trick: jumping rope