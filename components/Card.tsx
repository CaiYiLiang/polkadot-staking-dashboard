import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

export interface IStatCard {
  children: React.ReactNode;
  style?: string;
  inactive?: boolean;
}

export const StatCard = ({ children, inactive = false }: IStatCard) => (
  <div className="w-full shadow stats">
    <div className={`stat ${inactive ? 'bg-base-200' : 'bg-white'}`}>{children}</div>
  </div>
);

interface IContent {
  children?: React.ReactNode;
  text?: string | number;
  disabled?: boolean;
}

interface IStatCardTitle extends IContent {
  tooltip?: string;
}

export const StatCardTitle = ({ text, children, tooltip }: IStatCardTitle) => (
  <div className="stat-title flex items-center mb-2">
    {text || children}
    {tooltip && (
      <Tooltip
        placement="bottom"
        overlay={tooltip}
        arrowContent={<div className="rc-tooltip-arrow-inner" />}
        overlayClassName="w-60 p-1.25"
      >
        <span>!</span>
        {/* <OutLineInfoIcon /> */}
      </Tooltip>
    )}
  </div>
);

export const StatCardBody = ({ text, children, disabled }: IContent) => (
  <div className={`stat-value text-2xl font-normal ${disabled ? 'text-gray-400' : ''}`}>
    {text || children}
  </div>
);
