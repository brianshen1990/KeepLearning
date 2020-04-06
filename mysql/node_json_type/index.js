// const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

// Option 1: Passing parameters separately
const sequelize = new Sequelize('demoFeature', 'root', '****',  {
  host: '10.21.137.21',
  dialect: 'mysql'
});

const Model = Sequelize.Model;
class DEMO_JSON extends Model {}
DEMO_JSON.init({
  // attributes
  jdoc: {
    type: Sequelize.JSON
  },
  str_json: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'demo_json',
  timestamps: false,
  freezeTableName: true
});

const letTest = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const res = await DEMO_JSON.findAll();
    for ( let item of res ) {
      console.log( JSON.stringify(item) );
    }
    const recOne = await DEMO_JSON.findOne({
      where : { 
        jdoc: {
          name: "BrianUpdate"
        }
      }
    });
    console.log( JSON.stringify(recOne) );
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

letTest().then(()=> {
  console.log('Done');
}).catch( (err) => {
  console.error('Error ', err);
})