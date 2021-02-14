db.createUser({
  user: 'nestuser',
  pwd: 'nestuser',
  roles: [{
    role: 'readWrite',
    db: 'nestdb',
  }],
})
