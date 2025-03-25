import React, { useState, useEffect } from 'react';

const DataStructureShowdown = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    setAnimationComplete(false);
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentSlide]);
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  const slides = [
    // Title Slide
    {
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
          <h1 className="text-5xl font-bold mb-6 animate-bounce">DATA STRUCTURE SHOWDOWN!</h1>
          <div className="flex items-center justify-center w-full my-8">
            <div className="text-center p-6 bg-purple-100 rounded-lg shadow-xl text-purple-900 transform -rotate-6 transition-transform duration-300 hover:rotate-0">
              <h2 className="text-3xl font-bold">Parallel Lists</h2>
              <p className="text-lg">The Synchronized Duo</p>
            </div>
            <div className="text-6xl font-bold mx-6 animate-pulse">VS</div>
            <div className="text-center p-6 bg-indigo-100 rounded-lg shadow-xl text-indigo-900 transform rotate-6 transition-transform duration-300 hover:rotate-0">
              <h2 className="text-3xl font-bold">Binary Search Tree</h2>
              <p className="text-lg">The Branching Beast</p>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mt-4">Who will win the Address Book Challenge?</h3>
          <div className="mt-12 text-xl">≫ Click Right Arrow to Begin ≫</div>
        </div>
      )
    },
    
    // Operation Introduction
    {
      content: (
        <div className="h-full bg-gray-900 text-white p-8">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            The Challenge: Address Book Operations
          </h2>
          
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-green-800 to-green-600 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
              <div className="text-7xl mb-4 text-center">➕</div>
              <h3 className="text-2xl font-bold text-center mb-2">ADD</h3>
              <p className="text-center">Add new contacts to the address book</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800 to-blue-600 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
              <div className="text-7xl mb-4 text-center">🔍</div>
              <h3 className="text-2xl font-bold text-center mb-2">SEARCH</h3>
              <p className="text-center">Find existing contacts by name</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-800 to-red-600 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
              <div className="text-7xl mb-4 text-center">❌</div>
              <h3 className="text-2xl font-bold text-center mb-2">REMOVE</h3>
              <p className="text-center">Delete contacts from the address book</p>
            </div>
          </div>
          
          <div className="mt-12 text-xl text-center">
            <p>Each operation was timed across 10,000 contacts from number.csv</p>
            <p className="font-bold mt-2">Who will be the fastest? Let's find out!</p>
          </div>
        </div>
      )
    },
    
    // ADD Operation
    {
      content: (
        <div className="h-full relative overflow-hidden bg-gradient-to-br from-green-800 to-green-500 text-white p-8">
          <div className="absolute top-0 right-0 opacity-10 text-9xl">➕</div>
          
          <h2 className="text-4xl font-bold mb-4">ADD OPERATION SHOWDOWN</h2>
          <p className="text-lg mb-8">How fast can each structure add a new contact?</p>
          
          <div className="flex items-end mt-12 space-x-8">
            <div className="w-1/2">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">Parallel Lists</h3>
                <div className="relative w-full bg-white bg-opacity-20 rounded-t-lg">
                  <div 
                    className="bg-green-300 h-6 rounded-t-lg transition-all duration-1000 ease-out"
                    style={{ 
                      width: '100%', 
                      height: animationComplete ? '3px' : '0'
                    }}
                  ></div>
                </div>
                <div className="bg-white text-green-900 font-bold py-2 px-4 rounded-b-lg text-center w-full">
                  0.0010 ms
                </div>
                <div className="mt-4 text-center">
                  <div className="bg-green-200 text-green-900 py-1 px-3 rounded-full inline-block font-bold">
                    WINNER!
                  </div>
                  <div className="mt-2 text-lg font-semibold">24.12x Faster</div>
                </div>
              </div>
            </div>
            
            <div className="w-1/2">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">Binary Search Tree</h3>
                <div className="relative w-full bg-white bg-opacity-20 rounded-t-lg">
                  <div 
                    className="bg-indigo-300 rounded-t-lg transition-all duration-1000 ease-out"
                    style={{ 
                      width: '100%', 
                      height: animationComplete ? '72px' : '0'
                    }}
                  ></div>
                </div>
                <div className="bg-white text-indigo-900 font-bold py-2 px-4 rounded-b-lg text-center w-full">
                  0.0230 ms
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg">
            <h4 className="text-2xl font-bold mb-2">Why Parallel Lists Win:</h4>
            <p className="text-lg">
              Parallel Lists simply append to the end of an array (O(1) constant time), 
              while BST must traverse down the tree to find the right spot (O(log n) time).
              It's like the difference between tossing a card on top of a deck vs. 
              carefully filing it in a sorted cabinet!
            </p>
          </div>
        </div>
      )
    },
    
    // SEARCH Operation
    {
      content: (
        <div className="h-full relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-500 text-white p-8">
          <div className="absolute top-0 right-0 opacity-10 text-9xl">🔍</div>
          
          <h2 className="text-4xl font-bold mb-4">SEARCH OPERATION SHOWDOWN</h2>
          <p className="text-lg mb-8">How quickly can each structure find an existing contact?</p>
          
          <div className="flex items-end mt-12 space-x-8">
            <div className="w-1/2">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">Parallel Lists</h3>
                <div className="relative w-full bg-white bg-opacity-20 rounded-t-lg">
                  <div 
                    className="bg-green-300 rounded-t-lg transition-all duration-1000 ease-out"
                    style={{ 
                      width: '100%', 
                      height: animationComplete ? '140px' : '0'
                    }}
                  ></div>
                </div>
                <div className="bg-white text-green-900 font-bold py-2 px-4 rounded-b-lg text-center w-full">
                  0.1399 ms
                </div>
              </div>
            </div>
            
            <div className="w-1/2">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">Binary Search Tree</h3>
                <div className="relative w-full bg-white bg-opacity-20 rounded-t-lg">
                  <div 
                    className="bg-indigo-300 rounded-t-lg transition-all duration-1000 ease-out"
                    style={{ 
                      width: '100%', 
                      height: animationComplete ? '6.5px' : '0'
                    }}
                  ></div>
                </div>
                <div className="bg-white text-indigo-900 font-bold py-2 px-4 rounded-b-lg text-center w-full">
                  0.0065 ms
                </div>
                <div className="mt-4 text-center">
                  <div className="bg-indigo-200 text-indigo-900 py-1 px-3 rounded-full inline-block font-bold">
                    WINNER!
                  </div>
                  <div className="mt-2 text-lg font-semibold">21.43x Faster</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg">
            <h4 className="text-2xl font-bold mb-2">Why BST Dominates:</h4>
            <p className="text-lg">
              Searching a Binary Search Tree is like using a phone book; 
              you can eliminate half the possibilities with each comparison (O(log n)). 
              Parallel Lists must check each contact one by one until it finds a match (O(n)). 
              It's the difference between a smart search and brute force!
            </p>
          </div>
        </div>
      )
    },
    
    // REMOVE Operation
    {
      content: (
        <div className="h-full relative overflow-hidden bg-gradient-to-br from-red-800 to-red-500 text-white p-8">
          <div className="absolute top-0 right-0 opacity-10 text-9xl">❌</div>
          
          <h2 className="text-4xl font-bold mb-4">REMOVE OPERATION SHOWDOWN</h2>
          <p className="text-lg mb-8">How efficiently can each structure delete a contact?</p>
          
          <div className="flex items-end mt-12 space-x-8">
            <div className="w-1/2">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">Parallel Lists</h3>
                <div className="relative w-full bg-white bg-opacity-20 rounded-t-lg">
                  <div 
                    className="bg-green-300 rounded-t-lg transition-all duration-1000 ease-out"
                    style={{ 
                      width: '100%', 
                      height: animationComplete ? '39px' : '0'
                    }}
                  ></div>
                </div>
                <div className="bg-white text-green-900 font-bold py-2 px-4 rounded-b-lg text-center w-full">
                  0.0039 ms
                </div>
                <div className="mt-4 text-center">
                  <div className="bg-green-200 text-green-900 py-1 px-3 rounded-full inline-block font-bold">
                    WINNER!
                  </div>
                  <div className="mt-2 text-lg font-semibold">2.56x Faster</div>
                </div>
              </div>
            </div>
            
            <div className="w-1/2">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">Binary Search Tree</h3>
                <div className="relative w-full bg-white bg-opacity-20 rounded-t-lg">
                  <div 
                    className="bg-indigo-300 rounded-t-lg transition-all duration-1000 ease-out"
                    style={{ 
                      width: '100%', 
                      height: animationComplete ? '100px' : '0'
                    }}
                  ></div>
                </div>
                <div className="bg-white text-indigo-900 font-bold py-2 px-4 rounded-b-lg text-center w-full">
                  0.0100 ms
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg">
            <h4 className="text-2xl font-bold mb-2">Surprise Victory:</h4>
            <p className="text-lg">
              Theory would suggest BST should win here (O(log n) vs O(n)), but Parallel Lists 
              takes the win! This is likely due to Python's highly optimized list operations 
              and the overhead of tree rebalancing in the BST. Sometimes simplicity wins - 
              just find it and pop it!
            </p>
          </div>
        </div>
      )
    },
    
    // Overall Results
    {
      content: (
        <div className="h-full bg-gradient-to-br from-gray-900 to-black text-white p-8">
          <h2 className="text-4xl font-bold mb-8 text-center">THE FINAL SCOREBOARD</h2>
          
          <div className="overflow-hidden rounded-lg border-2 border-gray-700 mb-8">
            <table className="w-full text-lg">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-4 text-left">Operation</th>
                  <th className="p-4 text-center">Parallel Lists</th>
                  <th className="p-4 text-center">BST</th>
                  <th className="p-4 text-center">Winner</th>
                  <th className="p-4 text-right">Speed Factor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700 bg-gray-900">
                  <td className="p-4 font-bold">ADD</td>
                  <td className="p-4 text-center font-mono">0.0010 ms</td>
                  <td className="p-4 text-center font-mono">0.0230 ms</td>
                  <td className="p-4 text-center">
                    <span className="bg-green-800 text-green-200 py-1 px-3 rounded-full font-bold">
                      Parallel Lists
                    </span>
                  </td>
                  <td className="p-4 text-right font-bold">24.12x faster</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800">
                  <td className="p-4 font-bold">SEARCH</td>
                  <td className="p-4 text-center font-mono">0.1399 ms</td>
                  <td className="p-4 text-center font-mono">0.0065 ms</td>
                  <td className="p-4 text-center">
                    <span className="bg-indigo-800 text-indigo-200 py-1 px-3 rounded-full font-bold">
                      BST
                    </span>
                  </td>
                  <td className="p-4 text-right font-bold">21.43x faster</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900">
                  <td className="p-4 font-bold">REMOVE</td>
                  <td className="p-4 text-center font-mono">0.0039 ms</td>
                  <td className="p-4 text-center font-mono">0.0100 ms</td>
                  <td className="p-4 text-center">
                    <span className="bg-green-800 text-green-200 py-1 px-3 rounded-full font-bold">
                      Parallel Lists
                    </span>
                  </td>
                  <td className="p-4 text-right font-bold">2.56x faster</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-gradient-to-br from-green-900 to-green-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Parallel Lists Win For:</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Adding contacts (24.12x faster)</li>
                <li>Removing contacts (2.56x faster)</li>
                <li>Simple implementation</li>
                <li>Small to medium datasets</li>
                <li>Add-heavy applications</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">BST Wins For:</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Searching contacts (21.43x faster)</li>
                <li>Large datasets</li>
                <li>Search-heavy applications</li>
                <li>Predictable performance</li>
                <li>Ordered traversal needs</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    
    // Conclusion
    {
      content: (
        <div className="h-full bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8">
          <h2 className="text-4xl font-bold mb-8 text-center">THE VERDICT</h2>
          
          <div className="text-center mt-4 mb-12">
            <span className="text-2xl">It's a split decision!</span>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-lg mb-8">
            <p>The right data structure depends on your specific needs:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>If your app mostly <span className="font-bold text-green-300">adds new contacts</span>, choose <span className="font-bold text-green-300">Parallel Lists</span></li>
              <li>If your app mostly <span className="font-bold text-blue-300">searches for contacts</span>, choose <span className="font-bold text-blue-300">BST</span></li>
              <li>Consider the <span className="font-bold">size of your dataset</span> - BST advantages increase with size</li>
              <li>Think about <span className="font-bold">implementation complexity</span> - Parallel Lists are simpler</li>
            </ul>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Key Takeaways:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Data structure choice should match your application's most common operations</li>
              <li>Theoretical performance doesn't always match real-world results</li>
              <li>The most complex structure isn't always the best choice</li>
              <li>Different operations have vastly different performance characteristics</li>
            </ol>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold mb-4">Thanks for watching!</h3>
            <p className="text-xl">Address Book Performance Showdown</p>
          </div>
        </div>
      )
    }
  ];
  
  return (
    <div className="flex flex-col h-screen">
      {/* Main content */}
      <div className="flex-grow relative overflow-hidden">
        {slides[currentSlide].content}
      </div>
      
      {/* Navigation controls */}
      <div className="bg-black text-white p-4 flex justify-between items-center">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`px-4 py-2 rounded-lg flex items-center ${
            currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          ◀ Previous
        </button>
        
        <div className="text-center">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        
        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`px-4 py-2 rounded-lg flex items-center ${
            currentSlide === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default DataStructureShowdown; 