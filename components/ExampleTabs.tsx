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

  return (
    <div>
      <div style={{ display: 'flex', cursor: 'pointer' }}>
        {children.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              padding: '10px',
              borderBottom: activeTab === index ? '2px solid blue' : 'none',
            }}
          >
            {tab.props.label}
          </div>
        ))}
      </div>
      <div>{children[activeTab]}</div>
    </div>
  );
}

export function ExampleTab({ label, children }: ExampleTabProps) {
  return <div>{children}</div>;
}