---
id: TokenEscrow
title: TokenEscrow
---

<div class="contract-doc"><div class="contract"><h2 class="contract-header"><span class="contract-kind">contract</span> TokenEscrow</h2><div class="source">Source: <a href="https://github.com/MyBitFoundation/MyBit/blob/v1.0.0/contracts/TokenEscrow.sol" target="_blank">TokenEscrow.sol</a></div></div><div class="index"><h2>Index</h2><ul><li><a href="TokenEscrow.html#LogEscrowDeposited">LogEscrowDeposited</a></li><li><a href="TokenEscrow.html#LogEscrowWithdrawn">LogEscrowWithdrawn</a></li><li><a href="TokenEscrow.html#accessApproved">accessApproved</a></li><li><a href="TokenEscrow.html#anyOwner">anyOwner</a></li><li><a href="TokenEscrow.html#depositEscrow">depositEscrow</a></li><li><a href="TokenEscrow.html#">fallback</a></li><li><a href="TokenEscrow.html#">fallback</a></li><li><a href="TokenEscrow.html#receiveApproval">receiveApproval</a></li><li><a href="TokenEscrow.html#withdraw">withdraw</a></li></ul></div><div class="reference"><h2>Reference</h2><div class="events"><h3>Events</h3><ul><li><div class="item event"><span id="LogEscrowDeposited" class="anchor-marker"></span><h4 class="name">LogEscrowDeposited</h4><div class="body"><code class="signature">event <strong>LogEscrowDeposited</strong><span>(address _from, uint _amount) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_from</code> - address</div><div><code>_amount</code> - uint</div></dd></dl></div></div></li><li><div class="item event"><span id="LogEscrowWithdrawn" class="anchor-marker"></span><h4 class="name">LogEscrowWithdrawn</h4><div class="body"><code class="signature">event <strong>LogEscrowWithdrawn</strong><span>(address _user, uint _amount) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_user</code> - address</div><div><code>_amount</code> - uint</div></dd></dl></div></div></li></ul></div><div class="modifiers"><h3>Modifiers</h3><ul><li><div class="item modifier"><span id="accessApproved" class="anchor-marker"></span><h4 class="name">accessApproved</h4><div class="body"><code class="signature">modifier <strong>accessApproved</strong><span>(uint _accessLevel) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_accessLevel</code> - uint</div></dd></dl></div></div></li><li><div class="item modifier"><span id="anyOwner" class="anchor-marker"></span><h4 class="name">anyOwner</h4><div class="body"><code class="signature">modifier <strong>anyOwner</strong><span>() </span></code><hr/></div></div></li></ul></div><div class="functions"><h3>Functions</h3><ul><li><div class="item function"><span id="depositEscrow" class="anchor-marker"></span><h4 class="name">depositEscrow</h4><div class="body"><code class="signature">function <strong>depositEscrow</strong><span>(uint _amount) </span><span>external </span><span>returns  (bool) </span></code><hr/><dl><dt><span class="label-modifiers">Modifiers:</span></dt><dd><a href="TokenEscrow.html#accessApproved">accessApproved </a></dd><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_amount</code> - uint</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li><li><div class="item function"><span id="fallback" class="anchor-marker"></span><h4 class="name">fallback</h4><div class="body"><code class="signature">function <strong></strong><span>(address _database, address _mybTokenAddress) </span><span>public </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_database</code> - address</div><div><code>_mybTokenAddress</code> - address</div></dd></dl></div></div></li><li><div class="item function"><span id="fallback" class="anchor-marker"></span><h4 class="name">fallback</h4><div class="body"><code class="signature">function <strong></strong><span>() </span><span>external </span></code><hr/></div></div></li><li><div class="item function"><span id="receiveApproval" class="anchor-marker"></span><h4 class="name">receiveApproval</h4><div class="body"><code class="signature">function <strong>receiveApproval</strong><span>(address _from, uint _amount, address _token, bytes _data) </span><span>external </span><span>returns  (bool) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_from</code> - address</div><div><code>_amount</code> - uint</div><div><code>_token</code> - address</div><div><code>_data</code> - bytes</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li><li><div class="item function"><span id="withdraw" class="anchor-marker"></span><h4 class="name">withdraw</h4><div class="body"><code class="signature">function <strong>withdraw</strong><span>(uint _amount) </span><span>external </span><span>returns  (bool) </span></code><hr/><dl><dt><span class="label-modifiers">Modifiers:</span></dt><dd><a href="TokenEscrow.html#accessApproved">accessApproved </a></dd><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_amount</code> - uint</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li></ul></div></div></div>