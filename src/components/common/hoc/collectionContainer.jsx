import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getReleases} from '../../../redux/actions/landingPageActions'
import ReleaseList from '../releaseList/releaseList';

const CollectionContainer =() =>{
    const releases = useSelector((state) => state.release.releases);
    console.log(releases)
    const dispatch = useDispatch();
  
    function getData() {
      return () => {
        dispatch(getReleases());
      };
    }
  
    useEffect(() => {
      dispatch(getData());
    }, []);

    return <ReleaseList releases={releases}/>
  
}

export default CollectionContainer;