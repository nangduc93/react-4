import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  // State to track which panel is open
  const [openPanelIndex, setOpenPanelIndex] = useState(null);

  // Toggle the panel by setting the clicked index or closing it if already open
  const togglePanel = (index) => {
    setOpenPanelIndex(index === openPanelIndex ? null : index);
  };

  // Accordion data (can be dynamic)
  const accordionData = [
    { title: "Panel 1", content: "This is the content of panel 1." },
    { title: "Panel 2", content: "This is the content of panel 2." },
    { title: "Panel 3", content: "This is the content of panel 3." },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          {/* Accordion Header */}
          <div className="accordion-header" onClick={() => togglePanel(index)}>
            <h3>{item.title}</h3>
          </div>

          {/* Accordion Content */}
          {openPanelIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
