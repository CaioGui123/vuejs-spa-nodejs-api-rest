import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: 'Não Autorizado!',
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, name, email } = payload;

    req.user = { id, name, email };

    return next();
  } catch (e) {
    return res.status(401).json({
      message: 'Token Inválido ou Expirado!',
    });
  }
};
