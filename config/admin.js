module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8b35cdfbece59fa57f0afa1fc58fb606'),
  },
});
