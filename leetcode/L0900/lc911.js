/**

911. Online Election

In an election, the i-th vote was cast for persons[i] at time times[i].

Now, we would like to implement the following query function: TopVotedCandidate.q(int t) will return the number of the person that was leading the election at time t.  

Votes cast at time t will count towards our query.  In the case of a tie, the most recent vote (among tied candidates) wins.

 

Example 1:

Input: ["TopVotedCandidate","q","q","q","q","q","q"], [[[0,1,1,0,0,1,0],[0,5,10,15,20,25,30]],[3],[12],[25],[15],[24],[8]]
Output: [null,0,1,1,0,0,1]
Explanation: 
At time 3, the votes are [0], and 0 is leading.
At time 12, the votes are [0,1,1], and 1 is leading.
At time 25, the votes are [0,1,1,0,0,1], and 1 is leading (as ties go to the most recent vote.)
This continues for 3 more queries at time 15, 24, and 8.
 

Note:

1 <= persons.length = times.length <= 5000
0 <= persons[i] <= persons.length
times is a strictly increasing array with all elements in [0, 10^9].
TopVotedCandidate.q is called at most 10000 times per test case.
TopVotedCandidate.q(int t) is always called with t >= times[0].

 */

/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
  var Node = function (val, count, prev, next) {
    this.val = val;
    this.count = count;
    this.prev = prev;
    this.next = next;
  };

  const timeline = [];
  const cache = {};
  const dummy = new Node(-1, Number.MAX_VALUE);
  let end = dummy;

  for (let i = 0; i < persons.length; i++) {
    // console.log(i);
    const person = persons[i];
    if (person in cache) {
      cache[person].count++;
    } else {
      cache[person] = new Node(person, 1, end, null);
      end.next = cache[person];
      end = cache[person];
    }

    while (cache[person].count >= cache[person].prev.count) {
      let prev = cache[person].prev;
      let next = cache[person].next;
      prev.prev.next = cache[person];
      cache[person].prev = prev.prev;
      cache[person].next = prev;

      prev.prev = cache[person];
      prev.next = next;
      if (next) {
        next.prev = prev;
      } else {
        end = prev;
      }
    }
    timeline.push({
      time: times[i],
      most: dummy.next.val,
    });
  }
  // console.log(timeline);
  this.timeline = timeline;
  this.cache = {};
};

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
  const timeline = this.timeline;
  if (t >= timeline[timeline.length - 1].time) {
    return timeline[timeline.length - 1].most;
  }

  if (t in this.cache) return this.cache[t];
  let beg = 0;
  let end = timeline.length - 1;
  while (beg + 1 < end) {
    let middle = Math.floor((beg + end) / 2);
    if (timeline[middle].time === t) {
      this.cache[t] = timeline[middle].most;
      return timeline[middle].most;
    }
    if (timeline[middle].time < t) {
      beg = middle;
    } else {
      end = middle;
    }
  }
  if (timeline[end].time > t) {
    this.cache[t] = timeline[beg].most;
    return timeline[beg].most;
  } else {
    this.cache[t] = timeline[end].most;
    return timeline[end].most;
  }
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

/**
["TopVotedCandidate","q","q","q","q","q","q"]
[[[0,1,1,0,0,1,0],[0,5,10,15,20,25,30]],[3],[12],[25],[15],[24],[8]]
["TopVotedCandidate","q","q","q","q","q","q","q","q","q"]
[[[0,1,1,0,0,1,0],[0,5,10,15,20,25,30]],[3],[12],[25],[15],[24],[8],[30],[10000],[0]]
["TopVotedCandidate","q","q","q","q","q","q","q","q","q"]
[[[0,1,1,0,0,1,0,2,2,2],[0,5,10,15,20,25,30,35,40,50]],[3],[12],[25],[15],[24],[8],[30],[10000],[0]]
["TopVotedCandidate","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q"]
[[[0,1,0,2,1,3,4,3,2,4],[9,14,17,25,32,66,80,82,88,99]],[66],[25],[98],[80],[10],[83],[26],[87],[15],[16],[9],[100],[81],[79],[81],[89],[13],[67],[33],[99]]
["TopVotedCandidate","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q"]
[[[0,1,1,0,0,1,0,1,2,2,2,3,2,3,4,4,3,5,3,4,5,6,5,6,5,6,6,4,5,7,6,2,3,4,7,7,7,1,0,7,3,2,8,5,0,7,4,8,8,1],[96,135,230,451,863,1814,2380,2676,2776,2794,2960,3047,3095,3236,3338,3419,3572,3683,3744,3847,4186,4247,4858,4936,5034,5071,5149,6000,6151,6209,6347,6630,7006,7063,7229,7292,7398,7625,7666,7721,8357,8509,8679,9041,9092,9340,9368,9465,9586,9785]],[9040],[8358],[135],[3847],[6631],[229],[2381],[2379],[9786],[7625],[2676],[4187],[7005],[9464],[8509],[452],[2776],[9341],[7007],[9784],[863],[230],[3095],[9785],[6208],[3094],[3046],[1814],[7720],[5072],[8680],[4185],[5035],[7062],[7397],[7667],[8679],[4859],[3235],[7292],[6152],[9368],[3236],[3048],[9586],[7291],[231],[3237],[8510],[6348],[134],[2961],[450],[9091],[4186],[6630],[2795],[3573],[9092],[2677],[5070],[9041],[7624],[4858],[3047],[6629],[9465],[3418],[5149],[9339],[6150],[7665],[7064],[97],[1813],[7666],[6151],[9585],[2960],[4248],[2675],[3339],[451],[3682],[3848],[2793],[8678],[2380],[2777],[8356],[6347],[7006],[3420],[9369],[9466],[3743],[4247],[3572],[2775],[9340]]
  */
