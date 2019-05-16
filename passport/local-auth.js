const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require('../model/UserSchema');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password1',
    passReqToCallback: true
}, async (req, email, password1, done) => {
    const user = await User.findOne({ email })
    if (user) {
        return done(null, false, { success: false, message: 'el usuario ya existe' });
    } else {
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password1);
        await newUser.save();
        return done(null, newUser, { success: true, message: 'El usuario ha sido registrado de forma exitosa. Ahora puede iniciar sesión' });
    }
}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await User.findOne({ email });
    if (!user) {
        return done(null, false, { success: false, message: 'Email no registrado' });
    }
    if (!user.comparePassword(password)) {
        return done(null, false, { success: false, message: 'Contraseña incorrecta' });
    }
    return done(null, user, { success: true, message: 'Inicio de sesión exitoso' });
}));