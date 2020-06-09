Thermostat
constructor this.temp = 20
psm = true
min_temp = 10


function psm_off
psm === false


function max_temp
if psm === true
max_temp = 25
else
max_temp = 32




function raise(value)
if ()
temp + value


function lower
temp - 1


function current_usage
if temp < 18
return low-usage
else if temp > 18 && temp < 25
return medium-usage
else 
high-usage


-----
<form action="/set-temp" method="post">
  <input type="number" value="set_temp">
</form>

<form action="/switch-psm" method="post">
  <input type="submit" value="Switch PSM">
</form>

@switchPsm()
