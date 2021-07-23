import React from 'react';
import './Middle.css';
import { Button } from './Button';

function Middle() {
  return (
    <div className='middle'>
      <div className='clearfix'>
          <img className='img2' src='images/loaf1.png' alt='middleimage' width='auto' height='300'/>
          {/* <p className='middle-date'>July 19, 2021</p> */}
          <h2 className='middle-h2'>Sourdough Bread</h2>
          <br></br><br></br>
          <p className='middle-p-text'>Is naturally leavened bread, which
                                      means it doesn't use commercial 
                                      yeast to rise. instead, it uses a 
                                      'starter' – a fermented flour and
                                      water mixture that contains wild 
                                      yeast and good bacteria – to rise.Is naturally leavened bread, which
                                      means it doesn't use commercial 
                                      yeast to rise. instead, it uses a 
                                      'starter' – a fermented flour and
                                      water mixture that contains wild 
                                      yeast and good bacteria – to rise.Is naturally leavened bread, which
                                      means it doesn't use commercial 
                                      yeast to rise. instead, it uses a 
                                      'starter' – a fermented flour and
                                      water mixture that contains wild 
                                      yeast and good bacteria – to rise.Is naturally leavened bread, which
                                      means it doesn't use commercial 
                                      yeast to rise. instead, it uses a 
                                      'starter' – a fermented flour and
                                      water mixture that contains wild 
                                      yeast and good bacteria – to rise. </p>
          <br></br>
          <p className='middle-p-text'>This recipe makes a tasty 
                                      loaf filled with fresh
                                      basil, tomatoes, garlic, 
                                      and shredded cheese; 
                                      the bread has wonderful soft.Is naturally leavened bread, which
                                      means it doesn't use commercial 
                                      yeast to rise. instead, it uses a 
                                      'starter' – a fermented flour and
                                      water mixture that contains wild 
                                      yeast and good bacteria – to rise.</p>
          <br></br><br></br><br></br>
          <Button buttonStyle='btn--outline--black'>SHOP SOURDOUGH <i class="fas fa-chevron-circle-right"></i></Button>
     </div>
     <div className='clearfix-2'>
          <img className='img3' src='images/loaf2.png' alt='middleimage' width='auto' height='400'/>
          <br></br>
          <h2 className='middle-h2'>Supreme Garlic Batard</h2>
          <br></br><br></br>
          <p className='middle-p-text'>This recipe makes a tasty 
                                      loaf filled with fresh
                                      basil, tomatoes, garlic, 
                                      and shredded cheese; 
                                      the bread has wonderful soft. Is naturally leavened bread, which
                                      means it doesn't use commercial 
                                      yeast to rise. instead, it uses a 
                                      'starter' – a fermented flour and
                                      water mixture that contains wild 
                                      yeast and good bacteria – to rise. Is naturally leavened bread, which
                                      means it doesn't use commercial 
                                      yeast to rise. instead, it uses a 
                                      'starter' – a fermented flour and
                                      water mixture that contains wild 
                                      yeast and good bacteria – to rise.</p>
          <br></br><br></br>
          <p className='middle-p-text'>This recipe makes a tasty 
                                      loaf filled with fresh
                                      basil, tomatoes, garlic, 
                                      and shredded cheese; 
                                      the bread has wonderful soft. Is naturally leavened bread, which
                                      means it doesn't use commercial 
                                      yeast to rise. instead, it uses a 
                                      'starter' – a fermented flour and
                                      water mixture that contains wild 
                                      yeast and good bacteria – to rise. Is naturally leavened bread, which
                                      means it doesn't use commercial 
                                      yeast to rise. instead, it uses a 
                                      'starter' – a fermented flour and
                                      water mixture that contains wild 
                                      yeast and good bacteria – to rise.</p>
          <br></br><br></br>
          <Button buttonStyle='btn--outline--black'>SHOP SOURDOUGH <i class="fas fa-chevron-circle-right"></i></Button>
     </div>
    
    </div>
  );
}

export default Middle;