import styles from './avatar.module.css'

interface Props {
  hasBorder?: boolean,
  src: string
}

export function Avatar({hasBorder = true, src}: Props){
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} 
    />
  )
}