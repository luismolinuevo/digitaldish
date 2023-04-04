import { Strategy, ExtractJwt } from "passport-jwt";
import * as dotenv from "dotenv";

dotenv.config()

export default function jwtStrategy(passport) {
    passport.us(
        new Strategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JASONKEY
        }, function (payload, done){
            try {
                return done(null, { 
                    username: payload.username, 
                    id: payload.id,
                    email: payload.email,
                    display
                })
            } catch (e) {
                return done(e, null)
            }
        })
    )
}