const Model = require( "./model" );

const ProjectUser = class ProjectUser extends Model {
  static typifyInstanceResponse( response ) {
    return super.typifyInstanceResponse( response, ProjectUser );
  }
};

module.exports = ProjectUser;
