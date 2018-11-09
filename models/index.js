const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false,
});

const Page = db.define(
  'page',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM('open', 'closed'),
    },
  },
  {
    hooks: {
      beforeValidate: (page, options) => {
        page.name = nullify(page.name);
        page.email = nullify(page.email);
        page.title = nullify(page.title);
        page.content = nullify(page.content);
        if (!page.title === null) {
          page.slug = slugger(page.title);
        }
      },
    },
  }
);

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
});

// module.exports = { Page, User };

module.exports = {
  User,
  Page,
  db,
};

function slugger(title) {
  if (title === '') {
    return null;
  }
  return title
    .toLowerCase()
    .split(' ')
    .join('-');
}

function nullify(input) {
  if (input === '') {
    return null;
  }
  return input;
}
