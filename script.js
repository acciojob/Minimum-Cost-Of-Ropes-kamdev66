function calculateMinCost() {
  //your code here
   const heap = new MinHeap(ropes);
  let cost = 0;

  while (heap.size() > 1) {
    const rope1 = heap.extractMin();
    const rope2 = heap.extractMin();
    const newRope = rope1 + rope2;
    cost += newRope;
    heap.insert(newRope);
  }

  return cost;
  
  
}  
