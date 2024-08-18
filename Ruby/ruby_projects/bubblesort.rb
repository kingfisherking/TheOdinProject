def bubblesort(numbers)
  copy = numbers.dup
  for iteration in 1..numbers.length do
    for index in 1..numbers.length-1 do
      if copy[index] < copy[index-1]
        copy[index], copy[index-1] = copy[index-1], copy[index]
      end
    end
  end
  puts copy
  return copy
end

bubblesort([4,3,6,1,7])