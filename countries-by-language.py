country = ["Philippines", "Korea", "Japan", "USA"]
language = ["Filipino", "Hangul", "Nihongo", "English"]
pair_array = []
size = len(country)
for count in range(size):
        pair_array.append((country[count], language[count]))
        
print(pair_array)