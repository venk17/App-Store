import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, setActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabClassName = isActive ? 'tab-item active-tab' : 'tab-item'

  return (
    <li className={tabClassName}>
      <button type="button" className="tab-button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
