//https://leetcode.com/problems/unique-binary-search-trees/
//https://smlee729.wordpress.com/2018/03/10/algorithm-문제-unique-binary-search-trees/
//입력한 값이 1부터 n개의 정수가 되는 것이다. 1부터 n개의 정수를 가지고 만들 수 있는 유니크 조합을 찾는 것이다. 
//n=4 이면 1,2,3,4로 만들 수 있는 조합을 찾는다.
//한 쪽이 3개면 4개의 조합 나옴
//한 쪽이 2개면 2개의 조합 나옴
const numTrees = function(n) {
    
};

console.log(numTrees(4));

  1
	2 
   3 4

   1
	 4
	2
	 3
	 
   1
	 4
	3
   2
   
   1
	 3
	2  4 
	
 2
1 3
   4

 2
1  4
  3 


  3
1   4  
 2

   3
 2   4
1

  4
 3
1 2


    4
  1
   2
     3

   4
  1
	3
   2

   4
  2
 1 3 





 1
  2
   3 
    4
	 5

1
  2
   4
  3  5
  
1
  2
   3   
     5
   4

 1
   3
  2  5
	4
	
1
  3
 2 4
	5
	
1
  4
 3 5
2

1  
  4
 2 5
  3

1
  5
 4
2 3

1
  5
 2
  3
   4
   
1
  5
 2
  4
 3

