import React , {useContext} from 'react';
import { SiteContext } from './App';

export default function Header () {
  const siteState = useContext(SiteContext);
  return <h1>{siteState.name}</h1>
}
