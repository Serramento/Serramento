import React from "react";
import { Link } from "react-router-dom";

const ProjectComponent = (props) => {
  const { id } = props.project;
  return (
    <Link to={`/projects/${id}`}>      
      <div className="flex justify-center mb-16">
        <div className="h-4 w-4 rounded-lg bg-[#23A6F0] mr-1.5" />
        <div className="h-4 w-4 rounded-lg bg-[#23856D] mr-1.5" />
        <div className="h-4 w-4 rounded-lg bg-[#E77C40] mr-1.5" />
        <div className="h-4 w-4 rounded-lg bg-[#252B42]" />
      </div>
    </Link>
  );
};

export default ProjectComponent;
