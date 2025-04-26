const roleMiddleware = (allowedRoles) => {
    // Return a middleware function that checks the user's role
    return (req, res, next) => {
      // Retrieve the user's role from the authenticated request (set by authMiddleware)
      const userRole = req.user?.role; 
  
      // If there's no userRole, respond with 401 Unauthorized
      if (!userRole) {
        return res.status(401).json({ message: "Unauthorized: No role found" });
      }
  
      // If the user's role is not included in the allowed roles, respond with 403 Forbidden
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: "Forbidden: Access denied" });
      }
  
      // If the role is allowed, continue to the next middleware or route handler
      next();
    };
  };
  
  module.exports = roleMiddleware;