<?php 
	//Tăng dần FOR
    function sapxeptang_for($mang)
    {
        $sophantu = count($mang);
        for ($i = 0; $i < ($sophantu - 1); $i++)
        {
            for ($j = $i+1; $j < $sophantu; $j++)
            {
                if ($mang[$i] > $mang[$j])
                {
                    $tmp = $mang[$j];
                    $mang[$j] = $mang[$i];
                    $mang[$i] = $tmp;
                }
            }
        }
        return $mang;
    }

    //Giảm dần FOR
    function sapxepgiam_for($mang)
    {
        $sophantu = count($mang);
        for ($i = 0; $i < ($sophantu - 1); $i++)
        {
            for ($j = $i+1; $j < $sophantu; $j++)
            {
                if ($mang[$i] < $mang[$j])
                {
                    $tmp = $mang[$j];
                    $mang[$j] = $mang[$i];
                    $mang[$i] = $tmp;
                }
            }
        }
        return $mang;
    }

    //Hiển thị FOR
    function hienthi_for($mang)
    {
        $sophantu = count($mang);
        for ($i = 0; $i < $sophantu; $i++) 
        { 
            print_r("<pre>");
            echo $mang[$i]. ' ';
        }
    }

    //main
    echo "Sắp xếp tăng_for". "<br>";
    $mang = array(3, 27, 9, 11, 94, 95, 30);
    $mang = sapxeptang_for($mang);
    hienthi_for($mang);
    echo "<br>". "Sắp xếp giảm_for";
    $mang2 = array(3, 27, 9, 11, 94, 95, 30);
    $mang2 = sapxepgiam_for($mang2);
    hienthi_for($mang2);

	


	echo "Vòng lặp do...while". "<br>";
	$i = 0;
	do
	{
		
		$array2[] = rand(1, 30);
		$i++;

	} while($i < 7);
	sort($array2);
	echo "Sắp xếp tăng dần: ";
	print_r("<pre>");
	print_r($array2);

	rsort($array2);
	echo "<br>". "Sắp xếp giảm dần: ";
	print_r ("<pre>");
	print_r($array2);
?>
	
