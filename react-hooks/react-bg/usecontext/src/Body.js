import React , {useContext} from 'react';
import { SiteContext } from './App';

export default function Body () {
  const siteState = useContext(SiteContext);
  return <p>これは「{siteState.name}」の内容です</p>
}
