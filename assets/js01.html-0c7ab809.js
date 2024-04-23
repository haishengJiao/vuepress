import{_ as n,p as s,q as a,a1 as t}from"./framework-c053e3d1.js";const p={},e=t(`<h2 id="全组合数据判断" tabindex="-1"><a class="header-anchor" href="#全组合数据判断" aria-hidden="true">#</a> 全组合数据判断</h2><h3 id="请设计一个函数-判断一个给定的数据集各字段是否存在全组合关系。" tabindex="-1"><a class="header-anchor" href="#请设计一个函数-判断一个给定的数据集各字段是否存在全组合关系。" aria-hidden="true">#</a> 请设计一个函数，判断一个给定的数据集各字段是否存在全组合关系。</h3><h4 id="例1" tabindex="-1"><a class="header-anchor" href="#例1" aria-hidden="true">#</a> 例1：</h4><p>以下数据集为存在全组合关系的数据集。字段 1 包含（甲、乙）值，字段 2 包含（a、b）值，字段 3 包含（1、2、3）值。每种组合情况都可以在数据集的行记录中找到有且仅有一条。</p><table><thead><tr><th style="text-align:center;">字段1</th><th style="text-align:center;">字段2</th><th style="text-align:center;">字段3</th></tr></thead><tbody><tr><td style="text-align:center;">甲</td><td style="text-align:center;">a</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">甲</td><td style="text-align:center;">a</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">甲</td><td style="text-align:center;">a</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">甲</td><td style="text-align:center;">b</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">甲</td><td style="text-align:center;">b</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">甲</td><td style="text-align:center;">b</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">乙</td><td style="text-align:center;">a</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">乙</td><td style="text-align:center;">a</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">乙</td><td style="text-align:center;">a</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">乙</td><td style="text-align:center;">b</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">乙</td><td style="text-align:center;">b</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">乙</td><td style="text-align:center;">b</td><td style="text-align:center;">3</td></tr></tbody></table><p>要求函数输入为以下格式的 JSON 数据集数组，输出为布尔值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> inputData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> 字段<span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;甲&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> 字段<span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;甲&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> 字段<span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;甲&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> 字段<span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;甲&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> 字段<span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;甲&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> 字段<span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;甲&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> 字段<span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;乙&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> 字段<span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;乙&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> 字段<span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;乙&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> 字段<span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;乙&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> 字段<span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;乙&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> 字段<span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;乙&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">isFullCombination</span><span class="token punctuation">(</span><span class="token parameter">datas</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断不是数组的情况</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>datas<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token comment">// 判断数组为空的情况</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>datas<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token comment">// 字段映射对象(记录每一个字段可能出现的值)</span>
  <span class="token keyword">const</span> fieldMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 所有字段名</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>datas<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token comment">// 每一个字段值组合出来的情况，每次循环到一个对象的时候拼接组合情况</span>
  <span class="token keyword">const</span> combinationSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 映射关系(每一个属性值对应数字的关系)</span>
  <span class="token keyword">const</span> valueMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 每一个不通的属性值对应不同的数字(自增数字)</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> datas<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> combination <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">of</span> keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> item<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token keyword">let</span> valueSet <span class="token operator">=</span> fieldMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>valueSet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        valueSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        fieldMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> valueSet<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      valueSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
      <span class="token keyword">let</span> num <span class="token operator">=</span> valueMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 映射关系不存在</span>
        num <span class="token operator">=</span> n<span class="token operator">++</span>
        valueMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 拼接</span>
      combination <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 判断是否有重复项</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>combinationSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>combination<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    combinationSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>combination<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 计算 [...fieldMap] 每一项的第二项长度</span>
  <span class="token comment">// [, v] 结构，第一项不需要</span>
  <span class="token keyword">const</span> n1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>fieldMap<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> v<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>s <span class="token operator">*=</span> v<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> n2 <span class="token operator">=</span> datas<span class="token punctuation">.</span>length
  <span class="token keyword">return</span> n1 <span class="token operator">===</span> n2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","js01.html.vue"]]);export{r as default};