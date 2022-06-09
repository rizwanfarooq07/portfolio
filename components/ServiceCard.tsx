import React, { FunctionComponent } from "react";
import { ServiceCardPropsInterface, ServiceInterface } from "../type";

const ServiceCard: FunctionComponent<{ service: ServiceInterface }> = ({
  service: { title, Icon },
}) => {
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div>
        <h4 className="font-bold">{title}</h4>
      </div>
    </div>
  );
};

export default ServiceCard;
