
const restrictTo = (...allowedRoles) => {
  return (req, res, next) => {
  
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      res
        .status(403)
        .json({ message: "You do not have permission to perform this action" });
      return;
    }

   
    next();
  };
};

export default restrictTo;
