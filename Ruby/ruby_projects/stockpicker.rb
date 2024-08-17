#given a list of numbers, go through each item
#for each item, go through the rest of the list
#find the subsequent number that leads to the largest difference
#check the index for the item and the subsequent number
#if there is a bigger difference, keep the biggest
#difference = subsequent number - item
def stockpicker(prices)
  daypair = [0, 0]

  for buy in 0..prices.length-1
    for sell in 0..prices.length-1
      if sell > buy
        if prices[sell] - prices[buy] > prices[daypair[1]] - prices[daypair[0]]
          daypair = [buy, sell]
        end
      end
    end
  end
  puts "buy on day #{daypair[0]}, sell on day #{daypair[1]}"
  daypair
end
stockpicker([17, 3, 6, 9, 15, 8, 6, 1, 10])