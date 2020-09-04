import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function AliceJava() {
    const sceneryFrames = [
        { transform: "translateX(100%)" },
        { transform: "translateX(-100%)" },
    ];

    const sceneryTimingBackground = {
        duration: 36000,
        iterations: Infinity
    };

    let sceneryTimingForeground = {
        duration: 12000,
        iterations: Infinity
    };
    const background1 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingBackground,
        onUpdate: ({ animation }) => {
            // animation.currentTime = animation.effect.getTiming().duration / 2;
            console.log(animation.currentTime)
        },
    });


    const background2 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingBackground,
    });

    const foreground1 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingForeground,
    });


    const foreground2 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingForeground,
    });

    const spriteFrames = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }   
      ];

    const red_queen_and_alice = useWebAnimations({
        keyframes: spriteFrames,
        timing: {
            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 600,
            playbackRate: 1,
            iterations: Infinity
          }
    });
    

    return (
        <div className="wrapper">
            <div className="sky"></div>
            <div className="earth">
                <div id="red_queen_and_alice">
                    <img ref={red_queen_and_alice.ref} id="red_queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
                </div>
            </div>

            <div className="scenery" ref={foreground1.ref} id="foreground1">
                <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
            </div>
            <div className="scenery" ref={foreground2.ref} id="foreground2">
                <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
                <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
            </div>
            <div className="scenery" ref={background1.ref} id="background1">
                <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
                <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
                <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
            </div>
            <div className="scenery" ref={background2.ref} id="background2">
                <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />

                <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
                <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
            </div>
        </div>
    );
}

export default AliceJava;