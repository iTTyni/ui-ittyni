import * as React from 'react'
import { StyledTreeViewContainer, StyledTreeViewItem, StyledTreeViewList } from '../../../ui/ui_list'

const Items = [{
  title: "Infos General",
  ico: "far fa-id-card",
  actif: false,
  children: [
    { title: "Personelle", ico: "fa fa-user", details: <span>- 0 </span>, actif: false, component: 'personalData' },
    { title: "Contact", ico: "fa fa-home", details: '', actif: false, component: 'contact' },
    { title: "Assurance", ico: "fas fa-building", details: '', actif: false, component: 'assurance' },
    { title: "Antecedent", ico: "fa fa-file-medical", details: '', actif: false, component: 'antecedent' },
    { title: "Affectation", ico: "fas fa-exchange-alt", details: <span>- 1 sejour</span>, actif: false, component: 'affectation' }
  ]
}, {
  title: "Dossier Medicale", actif: false,
  ico: "fa fa-id-card-alt",
  children: [
    { title: "Radio", ico: "fa fa-file-prescription", actif: false },
    {
      title: "Bilan", ico: "fa fa-vials", children: [
        { title: "20/03/13", ico: "", details: <span>- 5 analyses</span>, actif: false }
      ], actif: false
    },
    { title: "Ordonnance", ico: "fa fa-capsules", actif: false },
    { title: "Consultation", ico: "fa fa-user-md", actif: false },
    { title: "Hospitalisation", ico: "fa fa-hospital", actif: false },
  ]
}, {
  title: "Payments",
  ico: "fa fa-file-invoice-dollar",
  children: [
    { title: "2020/30/04", ico: "fas fa-hand-holding-usd", details: <span>- 200 dhs rest</span>, actif: false },
    { title: "2020/10/04", ico: "fas fa-hand-holding-usd", details: <span>- 50 dhs rest</span>, actif: false }
  ], actif: false
}
]

const TreeNode: React.FC<any> = ({ node }) => {

  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <div onClick={toggleExpansion}>
        {node?.children && (<span>{isExpanded ? '[-]' : '[+]'}</span>)}
        {node?.title}
      </div>
      {isExpanded && node?.children && (
        <div style={{ marginLeft: '20px' }}>
          {node.children.map((child: any) => (
            <TreeNode key={child?.title} node={child} />
          ))}
        </div>
      )}
    </div>
  )
}

export const TreeView: React.FC<any> = ({ }) => {


  return (
    <StyledTreeViewContainer>
      <StyledTreeViewList>
        {Items.map((i: any) => <TreeNode node={i} />)}
      </StyledTreeViewList>
    </StyledTreeViewContainer>
  )
}
