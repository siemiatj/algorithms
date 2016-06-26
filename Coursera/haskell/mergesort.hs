mergeSort :: (Ord a) => [a] -> [a]
mergeSort [] = []
mergeSort [x] = [x]
mergeSort xs = merge (mergeSort left) (mergeSort right)
  where left = take (length xs `div` 2) xs
        right = drop (length xs `div` 2) xs

merge :: (Ord a) => [a] -> [a] -> [a]
merge xs [] = xs
merge [] ys = ys
merge (x:xs) (y:ys)
  | (x <= y) = x:(merge xs (y:ys))
  | otherwise = y:(merge (x:xs) ys)
