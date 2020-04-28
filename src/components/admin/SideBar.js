import React, {useEffect} from "react";
import Templates from './../../containers/routes';

export default function SideBar(props) {
  useEffect(() => {
    document.getElementById('main-wrapper').classList.toggle('toggled');
    return () => {
      document.getElementById('main-wrapper').classList.remove('toggled');
    }
  }, []);

  return (
      <aside id="sidebar">
        <div className="sidebar-title">
          <h2>React Admin</h2>
        </div>
        <div className="list-group">
          <a className="list-group-item" href="/">Home</a>
          {
            Templates.map((template, index) => (
                <a className="list-group-item" href={template.path} key={index}>{template.name}</a>
            ))
          }

        </div>
      </aside>
  );
}

