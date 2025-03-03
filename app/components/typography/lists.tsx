import { twMerge } from 'tailwind-merge';
import Paragraph from './paragraph';

interface ListItemProps {
  children?: React.ReactNode
  title?: string
  description?: string
  className?: string
}

const ListItem: React.FC<ListItemProps> = ({ children, title, description, className = "" }) => {
  if (children) {
    return <li className={twMerge('text-lg', className)}>{children}</li>
  }
  
  return (
    <li className={twMerge('text-lg', className)}>
      {title && <strong>{title}</strong>}
      {title && description && ': '}
      {description}
    </li>
  )
}

interface ListProps {
  items?: Array<{ title?: string; description?: string }>
  children?: React.ReactNode
  className?: string
  openingStatement?: string
  variant?: 'bullet' | 'numbered'
}

const List: React.FC<ListProps> = ({ 
  items, 
  children, 
  className = "", 
  openingStatement,
  variant = 'bullet' 
}) => {
  const ListTag = variant === 'bullet' ? 'ul' : 'ol'
  const listStyle = variant === 'bullet' ? 'list-disc' : 'list-decimal'

  return (
    <div>
      {openingStatement && <Paragraph className="mb-1">{openingStatement}</Paragraph>}
      <ListTag className={`${listStyle} pl-8 text-brown ${className}`}>
        {items ? 
          items.map((item, index) => (
            <ListItem key={index} title={item.title} description={item.description} />
          ))
          : children
        }
      </ListTag>
    </div>
  )
}

export default List;