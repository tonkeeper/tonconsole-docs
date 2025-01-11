import { ReactElement, ReactNode, useState } from 'react';

interface ExampleTabProps {
  label: string;
  children: ReactNode;
}

interface ExampleTabsProps {
  children: ReactElement<ExampleTabProps>[];
}

export function ExampleTabs({ children }: ExampleTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const childrens = Array.isArray(children) ? children : [children];

  return (
    <div>
      <div style={{ display: 'flex', cursor: 'pointer' }}>
        {childrens.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              padding: '10px',
              borderBottom: activeTab === index ? '2px solid blue' : 'none',
            }}>
            {tab.props.label}
          </div>
        ))}
      </div>
      <div>{childrens[activeTab]}</div>
    </div>
  );
}

export function ExampleTab({ label, children }: ExampleTabProps) {
  return <div>{children}</div>;
}
