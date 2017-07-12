---
title: "Happy Numbers"
date: 2017-07-17T13:10:11+02:00
draft: false
---

<h3>Intro</h3>

A happy number is defined by the following process: Start with a positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay). Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers).

<h3>Example</h3>


{{< highlight bash >}}
// is  '7' happy?
// 7 -> 49 
// 4^2 + 9^2 = 97
// 9^2 + 7^2 = 130
// 1^2 + 3^2 + 0^2 = 10
// 1^2 + 0^2 = 1 (happy number)
// is '2' happy?
// 2 -> 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4 (loop encountered)
{{< /highlight >}}