// #8 intro routing/navigation.

import React, {component} from 'react';
import { Link } from 'react-router-dom';

export default function Details() {
  return (
    <div>
        <h1>Welcome to the details page, WIP :)</h1>
        <Link to='/'>Back to home page</Link>
    </div>
  );
}